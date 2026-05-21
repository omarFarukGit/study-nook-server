import { createRemoteJWKSet, jwtVerify } from "jose";

const JWKS = createRemoteJWKSet(
  new URL(`${process.env.NEXT_URI}/api/auth/jwks`),
);

export const verifyToken = async (req, res, next) => {
  const header = req.headers.authorization;
  console.log(header);

  if (!header) {
    res.status(401).json({
      message: "unAthurized",
    });
  }
  const token = header.split(" ")[1];
  if (!token) {
    res.status(401).json({
      message: "unAthurized",
    });
  }

  try {
    const { payload } = await jwtVerify(token, JWKS);
    console.log(payload);
    next();
  } catch (error) {
    res.status(403).json({
      message: "Forbidden",
    });
  }
};
