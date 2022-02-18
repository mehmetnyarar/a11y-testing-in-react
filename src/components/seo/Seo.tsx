import Head from "next/head";
import React, { useMemo } from "react";

import { app } from "../../config/app";

interface SeoProps {
  title?: string;
  description?: string;
}

export const Seo: React.FC<SeoProps> = ({ title, description }) => {
  const headTitle = useMemo(() => {
    return [title, app.title].join(" - ");
  }, [title]);

  return (
    <Head>
      <title>{headTitle}</title>
      <meta name="description" content={description} />
    </Head>
  );
};
