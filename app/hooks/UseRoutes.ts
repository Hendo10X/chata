import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { FiMessageCircle } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { signOut } from "next-auth/react";
import useConversation from "./UseConversion";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/conversations",
        icon: FiMessageCircle,
        active: pathname === "/conversations" || !conversationId,
      },
      {
        label: "Users",
        href: "/users",
        icon: FiUsers,
        active: pathname === "/users",
      },
      {
        label: "Logout",
        href: "#",
        onClick: () => signOut(),
        icon: FiArrowLeft,
      },
    ],
    [pathname, conversationId]
  );
  return routes;
};

export default useRoutes;
