import { Inter } from "next/font/google";
import "./_global.scss";
import Header from "./components/header/header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Cart_Context_Provider } from "./contexts/cart_context";
import Footer from "./components/footer/footer";
import Back_To_Top from "./components/back_to_top/back_to_top";
import { Redux_Provider } from "./redux/redux_provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopping Website",
  description: "Lorem ipsum dolor sit amet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} mx-auto`} style={{maxWidth: "1600px"}}>
        <Redux_Provider>
        <Cart_Context_Provider>
          <Header />
          <Back_To_Top />
          {children}
          <Footer />
        </Cart_Context_Provider>
        </Redux_Provider>
      </body>
    </html>
  );
}
