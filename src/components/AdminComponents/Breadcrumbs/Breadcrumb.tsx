import React from "react";
import Link from "next/link";
interface BreadcrumbProps {
  pageName: string;
  backPage: string;
  backPageLink: string;
}
const Breadcrumb = ({ pageName, backPage, backPageLink }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-white dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2 text-gray-light">
          <li>
            <Link className="font-medium" href={backPageLink}>
              {backPage} /
            </Link>
          </li>
          <li className="font-medium text-white">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
