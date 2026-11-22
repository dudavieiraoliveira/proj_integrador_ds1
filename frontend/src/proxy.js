
import { withAuth } from "next-auth/middleware";

// Verifica a sessão antes de permitir o acesso.
export default withAuth({
  pages: { signIn: "/login" },
  callbacks: {
    authorized: ({ token }) => !!token && !token.error,
  },
});

// Páginas que exigem autenticação.
export const config = {
  matcher: ["/dashboard/:path*", "/perfil/:path*"],
};
