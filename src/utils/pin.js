const ITERATIONS = 120000;

function toHex(bytes) {
  return [...bytes].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

async function derivePinHash(pin, salt) {
  const cryptoApi = globalThis.crypto;
  if (!cryptoApi?.subtle || !cryptoApi.getRandomValues) {
    throw new Error('Este navegador no permite proteger el acceso con PIN.');
  }
  const key = await cryptoApi.subtle.importKey(
    'raw',
    new TextEncoder().encode(pin),
    'PBKDF2',
    false,
    ['deriveBits']
  );
  const bits = await cryptoApi.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: ITERATIONS, hash: 'SHA-256' },
    key,
    256
  );
  return toHex(new Uint8Array(bits));
}

export async function createPinRecord(pin) {
  if (!/^\d{6}$/.test(pin)) throw new Error('El PIN debe tener 6 dígitos.');
  const cryptoApi = globalThis.crypto;
  if (!cryptoApi?.subtle || !cryptoApi.getRandomValues) {
    throw new Error('Este navegador no permite proteger el acceso con PIN.');
  }
  const salt = cryptoApi.getRandomValues(new Uint8Array(16));
  return {
    salt: toHex(salt),
    hash: await derivePinHash(pin, salt)
  };
}

export async function verifyPin(pin, record) {
  if (!/^\d{6}$/.test(pin) || !record || !/^[\da-f]{32}$/.test(record.salt) || !/^[\da-f]{64}$/.test(record.hash)) {
    return false;
  }
  const salt = new Uint8Array(record.salt.match(/.{2}/g).map((byte) => Number.parseInt(byte, 16)));
  const candidate = await derivePinHash(pin, salt);
  let difference = 0;
  for (let index = 0; index < candidate.length; index += 1) {
    difference |= candidate.charCodeAt(index) ^ record.hash.charCodeAt(index);
  }
  return difference === 0;
}
