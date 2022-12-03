export interface LoginProps {
  username: string;
  password: string;
}

export interface AuthProps {
  title: string;
  link?: {
    url: string;
    text: string;
  };
  buttonText: string;
  onSubmit: () => void;
}
