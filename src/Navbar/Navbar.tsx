import { useState } from "react";
import {
  IconCode,
  IconBook,
  IconSchool,
  IconGauge,
  IconHome2,
  IconLogout,
  IconSwitchHorizontal,
  IconUser,
  IconMessageChatbot,
} from "@tabler/icons-react";
import { Center, Stack, Tooltip, UnstyledButton } from "@mantine/core";
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from "./NavbarSegmented.module.css";
import {  useNavigate } from "react-router";

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon size={20} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Home", redirect: "/" },
  { icon: IconGauge, label: "Dashboard", redirect: "/" },
  { icon: IconBook, label: "Exams", redirect: "exams" },
  { icon: IconCode, label: "Programs", redirect: "programs" },
  { icon: IconUser, label: "Users", redirect: "users" },
  { icon: IconSchool, label: "Semester", redirect: "semester" },
  { icon: IconMessageChatbot, label: "Feedback", redirect: "feedback" },
];

export function NavbarMinimal() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const links = mockdata.map((link, index) => {
    return (
      <NavbarLink
        {...link}
        key={link.label}
        active={index === active}
        onClick={() => {
          setActive(index);
          navigate(link.redirect);
        }}
      />
    );
  });

  return (
    <nav className={classes.navbar}>
      <Center>{/* <MantineLogo type="mark" size={30} /> */}</Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
        <NavbarLink icon={IconLogout} label="Logout" />
      </Stack>
    </nav>
  );
}
