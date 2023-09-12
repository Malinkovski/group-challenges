import Button from "./Button";

interface HeaderProps {
  isLoggedOut: boolean;
  handleLogout: () => void;
}

export const Header = ({ isLoggedOut, handleLogout }: HeaderProps) => {
  return (
    <header className="text-right bg-light p-2">
      {!isLoggedOut && <Button text="LOGOUT" onClick={handleLogout} />}
    </header>
  );
};
