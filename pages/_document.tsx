import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

export default class SiteDocument extends Document<{ language: string }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, language: ctx.pathname === "/en" ? "en" : "zh-Hans" };
  }
  render() {
    return <Html lang={this.props.language}><Head /><body><Main /><NextScript /></body></Html>;
  }
}
