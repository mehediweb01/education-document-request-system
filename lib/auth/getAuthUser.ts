import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const getUserFromToken = async (): Promise<{
  token: string;
  user_id: string;
  role: string;
} | null> => {
  try {
    const cookie = await cookies();
    const token = cookie.get("token")?.value;

    if (!token) {
      return null;
    }

    const decoded = jwt.verify(
      token as string,
      process.env.JWT_SECRET as string,
    ) as {
      user_id: string;
      role: string;
    };

    return {
      token: token,
      user_id: decoded.user_id,
      role: decoded.role,
    };
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Something went wrong");
    }
  }
};
