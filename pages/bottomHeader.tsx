import React from "react";

const BottomHeader = () => {
  return (
    <div className="header__bottom">
      <div className="header-box header-menu p-static">
        <div className="logo">
          <a href="https://thegoodinside.com">
            <img src="https://assets.thegoodinside.com/shop/img/Logo_Update.webp" />
          </a>
        </div>
        <a href="javascript:void(0)" className="mobile_menu menu-stripes-btn">
          <span></span>
        </a>
        <div className="header__cart" id="header__cart__container">
          <a href="https://thegoodinside.com/shop/cart/" className="cart-empty">
            <i className="ib vm icon-cart"></i>
          </a>

          <div className="header__cart--block" id="header__cart">
            <a href="javascript:void(0)" className="close mobile_menu_close">
              <i className="icon-icn_close"></i>
            </a>

            <div className="header__cart--empty" id="headerCartElem">
              <p>
                Your cart is lonely. Check out{" "}
                <a href="https://thegoodinside.com/shop/">our products</a>
                to add some goodness.
              </p>
            </div>
          </div>
        </div>
        <nav className="header__navigation">
          <div className="navigation-mobile-header">
            <div className="logo-compact"></div>

            <a
              href="javascript:void(0)"
              className="mobile_menu menu-stripes-btn"
            >
              <span></span>
            </a>
          </div>

          <ul className="navigation__list" id="navigation__list">
            <li
              className="navigation__item shop-btn-wrapper"
              data-show-block="#header__goods"
            >
              <a
                href="javascript:void(0)"
                className="mobile-with-angle shop-btn"
                data-url="/shop/"
              >
                Shop
              </a>

              <ul className="navigation__item__submenu" id="header__goods"></ul>
            </li>
            <li className="navigation__item mobile-item">
              <a
                href="javascript:void(0)"
                data-url="https://thegoodinside.com/our-blog/"
                className="hide-arrow"
              >
                {" "}
                Blog
              </a>
            </li>

            <span id="bottom_menu">
              <li className="navigation__item" data-show-block="#Collaborate">
                <a
                  href="javascript:void(0)"
                  data-url="https://thegoodinside.com/collaborate/"
                >
                  Collaborate
                </a>
                <ul
                  className="navigation__item__submenu"
                  id="Collaborate"
                  style={{ display: "none" }}
                >
                  <li>
                    <a href="https://thegoodinside.com/collaborate/">
                      Collaborate
                    </a>
                  </li>
                  <li>
                    <a href="https://thegoodinside.com/visionary-business-owner/">
                      {" "}
                      Visionary Business Owner
                    </a>
                  </li>
                  <li>
                    <a href="https://thegoodinside.com/affiliate/">
                      Affiliates
                    </a>
                  </li>
                  <li>
                    <a href="https://thegoodinside.com/influencer/">
                      Influencer
                    </a>
                  </li>
                  <li>
                    <a href="https://thegoodinside.com/meet-touchstone-essentials-live/">
                      Touchstone Essentials Live
                    </a>
                  </li>
                  <li>
                    <a href="https://thegoodinside.com/mastermind/">
                      Mastermind Event
                    </a>
                  </li>
                  <li>
                    <a href="https://thegoodinside.com/touchstonetour/">
                      Touchstone Tour
                    </a>
                  </li>
                </ul>
              </li>
              <li className="navigation__item" data-show-block="#Community">
                <a
                  href="javascript:void(0)"
                  data-url="https://thegoodinside.com/our-blog/"
                >
                  Community
                </a>
                <ul className="navigation__item__submenu" id="Community">
                  <li>
                    <a href="https://thegoodinside.com/our-blog/">Blog</a>
                  </li>
                  <li>
                    <a href="https://thegoodinside.com/qa/">Q&amp;A</a>
                  </li>
                  <li>
                    <a href="https://thegoodinside.com/experts/">Experts</a>
                  </li>
                  <li>
                    <a href="https://thegoodinside.com/reviews/">Reviews</a>
                  </li>
                  <li>
                    <a href="https://thegoodinside.com/social-justice/">
                      Social Justice
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className="navigation__item"
                data-show-block="#Why_Touchstone"
              >
                <a
                  href="javascript:void(0)"
                  data-url="https://thegoodinside.com/our-blog/"
                >
                  Why Touchstone
                </a>
                <ul className="navigation__item__submenu" id="Why_Touchstone">
                  <li>
                    <a href="https://thegoodinside.com/about-us/">About Us</a>
                  </li>
                </ul>
              </li>
            </span>

            <li className="navigation__item mobile-item">
              <div className="search-block menu" id="search-mobile-block"></div>
            </li>
            <li className="navigation__item mobile-item green-link">
              <a
                href="https://thegoodinside.com/joinredirect/"
                className="hide-arrow"
              >
                <i className="icon-flag-usa"></i> JOIN NOW
              </a>
            </li>
            <li className="navigation__item mobile-item green-link">
              <a
                className="log-in-show hide-arrow"
                href="https://thegoodinside.com/shop/login"
              >
                Login
              </a>
            </li>
            <li
              className="navigation__item mobile-item green-link toggle__countries current_language"
              id="toggle__countries-mobile"
              data-current-lang=""
            >
              <a
                href="javascript:void(0)"
                className="toggle__countries hide-arrow"
                id="mobile_selected_country"
              >
                <span id="country_name" className="country_name">
                  United States <span className="uppercase">(usd)</span>
                </span>
              </a>

              <div
                className="countries__container "
                id="mobile_countries_list"
                style={{ display: "none", overflowX: "auto", height: 450 }}
              >
                <a
                  href="javascript:void(0)"
                  className="close mobile_menu_close"
                >
                  <i className="icon-icn_close"></i>
                </a>
                <div className="container">
                  <ul className="countries__list">
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="2"
                        data-name="Argentina"
                        data-currency="usd"
                      >
                        Argentina <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="3"
                        data-name="Australia"
                        data-currency="usd"
                      >
                        Australia <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="4"
                        data-name="Austria"
                        data-currency="usd"
                      >
                        Austria <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="5"
                        data-name="Belgium"
                        data-currency="usd"
                      >
                        Belgium <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="7"
                        data-name="Bulgaria"
                        data-currency="usd"
                      >
                        Bulgaria <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="8"
                        data-name="Canada"
                        data-currency="usd"
                      >
                        Canada <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="9"
                        data-name="Canary Islands"
                        data-currency="usd"
                      >
                        Canary Islands <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="10"
                        data-name="Chile"
                        data-currency="usd"
                      >
                        Chile <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="57"
                        data-name="China"
                        data-currency="usd"
                      >
                        China <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="11"
                        data-name="Colombia"
                        data-currency="usd"
                      >
                        Colombia <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="12"
                        data-name="Costa Rica"
                        data-currency="usd"
                      >
                        Costa Rica <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="60"
                        data-name="Croatia"
                        data-currency="usd"
                      >
                        Croatia <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="13"
                        data-name="Cyprus"
                        data-currency="usd"
                      >
                        Cyprus <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="14"
                        data-name="Czech Republic"
                        data-currency="usd"
                      >
                        Czech Republic <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="15"
                        data-name="Denmark"
                        data-currency="usd"
                      >
                        Denmark <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="16"
                        data-name="Dominican Republic"
                        data-currency="usd"
                      >
                        Dominican Republic{" "}
                        <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="17"
                        data-name="Ecuador"
                        data-currency="usd"
                      >
                        Ecuador <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="19"
                        data-name="Estonia"
                        data-currency="usd"
                      >
                        Estonia <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="20"
                        data-name="Finland"
                        data-currency="usd"
                      >
                        Finland <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="21"
                        data-name="France"
                        data-currency="usd"
                      >
                        France <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="22"
                        data-name="Germany"
                        data-currency="usd"
                      >
                        Germany <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="23"
                        data-name="Greece"
                        data-currency="usd"
                      >
                        Greece <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="67"
                        data-name="Guyana"
                        data-currency="usd"
                      >
                        Guyana <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="24"
                        data-name="Hong Kong"
                        data-currency="usd"
                      >
                        Hong Kong <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="25"
                        data-name="Hungary"
                        data-currency="usd"
                      >
                        Hungary <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="26"
                        data-name="Indonesia"
                        data-currency="usd"
                      >
                        Indonesia <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="27"
                        data-name="Ireland"
                        data-currency="usd"
                      >
                        Ireland <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="28"
                        data-name="Italy"
                        data-currency="usd"
                      >
                        Italy <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="29"
                        data-name="Japan"
                        data-currency="usd"
                      >
                        Japan <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="31"
                        data-name="Latvia"
                        data-currency="usd"
                      >
                        Latvia <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="32"
                        data-name="Lithuania"
                        data-currency="usd"
                      >
                        Lithuania <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="33"
                        data-name="Luxembourg"
                        data-currency="usd"
                      >
                        Luxembourg <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="34"
                        data-name="Macau"
                        data-currency="usd"
                      >
                        Macau <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="56"
                        data-name="Malaysia"
                        data-currency="usd"
                      >
                        Malaysia <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="35"
                        data-name="Malta"
                        data-currency="usd"
                      >
                        Malta <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="36"
                        data-name="Monaco"
                        data-currency="usd"
                      >
                        Monaco <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="37"
                        data-name="Netherlands"
                        data-currency="usd"
                      >
                        Netherlands <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="38"
                        data-name="New Zealand"
                        data-currency="usd"
                      >
                        New Zealand <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="39"
                        data-name="Norway"
                        data-currency="usd"
                      >
                        Norway <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="40"
                        data-name="Panama"
                        data-currency="usd"
                      >
                        Panama <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="64"
                        data-name="Paraguay"
                        data-currency="usd"
                      >
                        Paraguay <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="42"
                        data-name="Philippines"
                        data-currency="usd"
                      >
                        Philippines <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="43"
                        data-name="Poland"
                        data-currency="usd"
                      >
                        Poland <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="44"
                        data-name="Portugal"
                        data-currency="usd"
                      >
                        Portugal <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="45"
                        data-name="Romania"
                        data-currency="usd"
                      >
                        Romania <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="46"
                        data-name="Singapore"
                        data-currency="usd"
                      >
                        Singapore <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="47"
                        data-name="Slovakia"
                        data-currency="usd"
                      >
                        Slovakia <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="48"
                        data-name="Slovenia"
                        data-currency="usd"
                      >
                        Slovenia <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="61"
                        data-name="South Korea"
                        data-currency="usd"
                      >
                        South Korea <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="50"
                        data-name="Spain"
                        data-currency="usd"
                      >
                        Spain <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="65"
                        data-name="Suriname"
                        data-currency="usd"
                      >
                        Suriname <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="51"
                        data-name="Sweden"
                        data-currency="usd"
                      >
                        Sweden <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="52"
                        data-name="Switzerland"
                        data-currency="usd"
                      >
                        Switzerland <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="53"
                        data-name="Taiwan"
                        data-currency="usd"
                      >
                        Taiwan <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="62"
                        data-name="Thailand"
                        data-currency="usd"
                      >
                        Thailand <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="54"
                        data-name="United Kingdom"
                        data-currency="gbp"
                      >
                        United Kingdom <span className="uppercase">(gbp)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <i className="ib vm icon-icn_check_small"></i>
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="1"
                        data-name="United States"
                        data-currency="usd"
                      >
                        United States <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                    <li className="countries__list__item">
                      <a
                        href="javascript:void(0)"
                        className="check__country custom_check__country"
                        data-id="66"
                        data-name="Uruguay"
                        data-currency="usd"
                      >
                        Uruguay <span className="uppercase">(usd)</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li
              className="navigation__item  mobile-item drop-menu  green-link mobile-toggle-menu languages-selector"
              id="toggle__languages-mobile"
            ></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BottomHeader;
