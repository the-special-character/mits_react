import React, { createContext, PureComponent } from "react";

const LocaleContext = createContext();

export class LocaleProvider extends PureComponent {
  state = {
    locale: "en",
  };

  toggleLocale = () => {
    this.setState(({ locale }) => {
      return {
        locale: locale === "en" ? "fr" : "en",
      };
    });
  };

  render() {
    const { locale } = this.state;
    const { children } = this.props;
    return (
      <LocaleContext.Provider
        value={{
          locale,
          toggleLocale: this.toggleLocale,
        }}
      >
        {children}
      </LocaleContext.Provider>
    );
  }
}

export default LocaleContext;
