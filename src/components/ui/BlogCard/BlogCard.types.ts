export interface TagProps {
  label: string;
  linkTo?: string;
}

export interface BlogCardProps {
  title?: string;
  date?: string;
  time?: string;
  imgUrl?: string;
  tags?: TagProps[];
  linkTo?: string;
}
