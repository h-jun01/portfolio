import Link from "next/link";
// import { config } from "@site.config";

import { ContentWrapper } from "src/components/ContentWrapper";
import { useRouter } from "next/router";

// export const SiteHeader: React.FC = () => {
//   const router = useRouter();
//   return (
//     <header className="site-header">
//       <ContentWrapper>
//         <div className="site-header__inner">
//           <div className={router.pathname == "/" ? "active" : ""}>
//             <Link href="/works" passHref>
//               <a className="site-header__logo-link">
//                 {/* <img
//                 src="/logo.svg"
//                 // alt={config.siteMeta.title}
//                 className="site-header__logo-img"
//               /> */}
//                 works
//               </a>
//             </Link>
//           </div>
//           <Link href="/" passHref>
//             <a className="site-header__logo-link">
//               {/* <img
//               src="/logo.svg"
//               // alt={config.siteMeta.title}
//               className="site-header__logo-img"
//             /> */}
//               home
//             </a>
//           </Link>
//           <div className="site-header__links">
//             {/* {config.headerLinks.map((link, i) => {
//             const key = `header-link-${i}`;
//             if (link.href.startsWith("/")) {
//               return (
//                 <Link key={key} href={link.href} passHref>
//                   <a className="site-header__link">{link.title}</a>
//                 </Link>
//               );
//             }
//             return (
//               <a key={key} href={link.href} className="site-header__link">
//                 {link.title}
//               </a>
//             );
//           })} */}
//           </div>
//         </div>
//       </ContentWrapper>
//     </header>
//   );
// };

export const SiteHeader: React.FC = () => {
  const router = useRouter();
  return (
    <header className="site-header">
      <ContentWrapper>
        <div className="site-header__inner">
          <h1>Jun Hashimoto</h1>
          <div className={router.pathname == "/" ? "active" : "p"}>
            <Link href="/" passHref>
              <a className="site-header__logo-link">profile</a>
            </Link>
          </div>
          <div className={router.pathname == "/works" ? "active" : "w"}>
            <Link href="/works" passHref>
              <a className="site-header__logo-link">works</a>
            </Link>
          </div>
          <div className={router.pathname == "/skills" ? "active" : "s"}>
            <Link href="/skills" passHref>
              <a className="site-header__logo-links">skills</a>
            </Link>
          </div>
          <div className={router.pathname == "/contact" ? "active" : "c"}>
            <Link href="/contact" passHref>
              <a className="site-header__logo-links">contact</a>
            </Link>
          </div>
        </div>
      </ContentWrapper>
      <p className="hoge1">
        <img src="./images/border.png" alt="a" />
      </p>
    </header>
  );
};
