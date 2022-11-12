// utils/generate-nonce.ts
import crypto from 'crypto';

const generateNonce = (): string => {
  return self.crypto.randomUUID();
};

export default generateNonce;