import { withAuth } from "next-auth/middleware";

// Export a middleware function (Next.js requires the export to be a function)
export default withAuth;

export const config = {
  matcher: ["/dashboard/:path*"],
};
