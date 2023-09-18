import React, { FC } from "react";

interface PageParams {
  params: { name: string; title: string; page: any };
  searchParams: { page: string };
  children: React.ReactNode;
}
const NameLayout: FC<PageParams> = ({ params, searchParams, children }) => {
  return <div>{children}</div>;
};
export default NameLayout;
