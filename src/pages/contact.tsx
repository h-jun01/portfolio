import { NextPage } from "next";
import { PageSEO } from "src/components/PageSEO";
import { ContentWrapper } from "src/components/ContentWrapper";
import styled, { css } from "styled-components";

const Page: NextPage = () => {
  return (
    <main>
      <PageSEO
        title="JunHashimoto | Contact"
        path="/contact"
        removeSiteNameFromTitle={true}
      />
      <ContentWrapper>
        <p>aaa</p>
      </ContentWrapper>
    </main>
  );
};

export default Page;
