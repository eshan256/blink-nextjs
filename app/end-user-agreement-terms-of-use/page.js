import Link from 'next/link';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import { breadcrumbs } from '@/lib/schema';
import PageScript from './page-script';
import './page.css';

export const metadata = {
  "title": {
    "absolute": "End User Agreement and Terms of Use | BlinkConnect"
  },
  "description": "The End User Agreement and Terms of Use for the BlinkConnect app.",
  "alternates": {
    "canonical": "/end-user-agreement-terms-of-use/"
  },
  "openGraph": {
    "title": "End User Agreement and Terms of Use | BlinkConnect",
    "description": "The End User Agreement and Terms of Use for the BlinkConnect app.",
    "url": "/end-user-agreement-terms-of-use/"
  }
};

export default function TermsPage() {
  return (
    <div className="pg-terms">
    <main id="top">
      <JsonLd data={breadcrumbs('/end-user-agreement-terms-of-use/')} />
      <section className="l-hero">
        <div className="wrap l-grid">
          <div className="l-copy">
            <span className="label" style={{ "color": "var(--accent)" }}>
              Terms of Use
            </span>
            {" "}
            <h1>
              End User Agreement /{" "}
              <em>
                Terms Of Use
              </em>
            </h1>
          </div>
          {" "}
          <div className="l-meta">
            <div>
              <span>
                Effective date
              </span>
              <strong>
                May 18, 2024
              </strong>
            </div>
            {" "}
            <Link href="/privacy-policy/">
              <b>
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-doc" />
                </svg>
                Read our Privacy Policy
              </b>
              <svg className="i" width="16" height="16" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </Link>
            {" "}
            <button type="button" id="print-btn">
              <b>
                <svg className="i" width="18" height="18" aria-hidden="true">
                  <use href="#i-print" />
                </svg>
                Print this page
              </b>
              <svg className="i" width="16" height="16" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      {" "}
      <div className="wrap legal">
        <div className="legal-grid">
          <details className="toc" open>
            <summary>
              <span>
                <svg className="i" width="16" height="16" aria-hidden="true">
                  <use href="#i-list" />
                </svg>
                On this page
              </span>
              <svg className="i chev" width="18" height="18" aria-hidden="true">
                <use href="#i-chev-down" />
              </svg>
            </summary>
            {" "}
            <ol>
              <li>
                <a href="#agreement">
                  <i>
                    01
                  </i>
                  <span>
                    Agreement between User and BlinkConnect
                  </span>
                </a>
              </li>
              <li>
                <a href="#electronic-communications">
                  <i>
                    02
                  </i>
                  <span>
                    Electronic Communications
                  </span>
                </a>
              </li>
              <li>
                <a href="#your-account">
                  <i>
                    03
                  </i>
                  <span>
                    Your Account
                  </span>
                </a>
              </li>
              <li>
                <a href="#children">
                  <i>
                    04
                  </i>
                  <span>
                    Children Under Thirteen
                  </span>
                </a>
              </li>
              <li>
                <a href="#refunds">
                  <i>
                    05
                  </i>
                  <span>
                    Cancellation/Refund Policy
                  </span>
                </a>
              </li>
              <li>
                <a href="#copyright">
                  <i>
                    06
                  </i>
                  <span>
                    Notice and Procedure for Making Claims of Copyright Infringement.
                  </span>
                </a>
              </li>
              <li>
                <a href="#third-party-sites">
                  <i>
                    07
                  </i>
                  <span>
                    Links to Third Party Sites/Third Party Services
                  </span>
                </a>
              </li>
              <li>
                <a href="#prohibited-use">
                  <i>
                    08
                  </i>
                  <span>
                    No Unlawful or Prohibited Use/Intellectual Property
                  </span>
                </a>
              </li>
              <li>
                <a href="#communication-services">
                  <i>
                    09
                  </i>
                  <span>
                    Use of Communication Services
                  </span>
                </a>
              </li>
              <li>
                <a href="#third-party-accounts">
                  <i>
                    10
                  </i>
                  <span>
                    Third Party Accounts
                  </span>
                </a>
              </li>
              <li>
                <a href="#international">
                  <i>
                    11
                  </i>
                  <span>
                    International Users
                  </span>
                </a>
              </li>
              <li>
                <a href="#indemnification">
                  <i>
                    12
                  </i>
                  <span>
                    Indemnification
                  </span>
                </a>
              </li>
              <li>
                <a href="#arbitration">
                  <i>
                    13
                  </i>
                  <span>
                    Arbitration
                  </span>
                </a>
              </li>
              <li>
                <a href="#class-action">
                  <i>
                    14
                  </i>
                  <span>
                    Class Action Waiver
                  </span>
                </a>
              </li>
              <li>
                <a href="#liability">
                  <i>
                    15
                  </i>
                  <span>
                    Liability Disclaimer
                  </span>
                </a>
              </li>
              <li>
                <a href="#data-retention">
                  <i>
                    16
                  </i>
                  <span>
                    Data Retention and Removal
                  </span>
                </a>
              </li>
              <li>
                <a href="#termination">
                  <i>
                    17
                  </i>
                  <span>
                    Termination/Access Restriction
                  </span>
                </a>
              </li>
              <li>
                <a href="#changes">
                  <i>
                    18
                  </i>
                  <span>
                    Changes to Terms
                  </span>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i>
                    19
                  </i>
                  <span>
                    Contact Us
                  </span>
                </a>
              </li>
            </ol>
          </details>
          {" "}
          <div>
            <article className="prose">
              <section id="agreement">
                <h2>
                  Agreement between User and BlinkConnect
                </h2>
                {" "}
                <p>
                  Welcome to wehookup.com. The wehookup.com website (the "Site") is comprised of various web pages operated by wehookup inc. wehookup.com is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein (the "Terms"). Your use of wehookup.com constitutes your agreement to all such Terms. Please read these terms carefully, and keep a copy of them for your reference.
                </p>
                {" "}
                <p>
                  BlinkConnect is a networking app.
                </p>
                {" "}
                <p>
                  It's a networking &amp; matchmaking service
                </p>
                {" "}
                <h3>
                  Privacy
                </h3>
                {" "}
                <p>
                  Your use of blinkconnect is subject to wehookup inc's Privacy Policy. Please review our{" "}
                  <Link href="/privacy-policy/">
                    Privacy Policy
                  </Link>
                  , which also governs the Site and informs users of our data collection practices.
                </p>
              </section>
              {" "}
              <section id="electronic-communications">
                <h2>
                  Electronic Communications
                </h2>
                {" "}
                <p>
                  Visiting blinkconnect or sending emails to wehookup inc constitutes electronic communications. You consent to receive electronic communications and you agree that all agreements, notices, disclosures and other communications that we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communications be in writing.
                </p>
              </section>
              {" "}
              <section id="your-account">
                <h2>
                  Your Account
                </h2>
                {" "}
                <p>
                  If you use this site, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password. You may not assign or otherwise transfer your account to any other person or entity. You acknowledge that wehookup inc is not responsible for third party access to your account that results from theft or misappropriation of your account. wehookup inc and its associates reserve the right to refuse or cancel service, terminate accounts, or remove or edit content in our sole discretion.
                </p>
              </section>
              {" "}
              <section id="children">
                <h2>
                  Children Under Thirteen
                </h2>
                {" "}
                <p>
                  Wehookup inc does not knowingly collect, either online or offline, personal information from persons under the age of thirteen. If you are under 18, you may use wehookup.com only with permission of a parent or guardian.
                </p>
              </section>
              {" "}
              <section id="refunds">
                <h2>
                  Cancellation/Refund Policy
                </h2>
                {" "}
                <p>
                  Generally, all charges for purchases are non-refundable, and there are no refunds or credits for partially used periods. We may make an exception if a refund for a subscription offering is requested within fourteen days of the transaction date, or if the laws applicable in your jurisdiction provide for refunds. For subscribers residing in the EU or European Economic Area – in accordance with local law, you are entitled to a full refund without stating the reason during the 14 days after the subscription begins. Please note that this 14-day period commences when the subscription starts. For subscribers and purchasers of Virtual Items residing in the Republic of Korea – in accordance with local law, you are entitled to a full refund of your subscription and/or unused Virtual Items during the 7 days following the purchase. Please note that this 7-day period commences upon the purchase. Except as noted above for members resident in the Republic of Korea, purchases of Virtual Items are FINAL AND NON-REFUNDABLE. You cannot cancel an order for delivery of digital content that is not delivered on a physical medium if order processing has begun with your explicit prior consent and acknowledgement that you will thereby lose your right of cancellation. This applies, e.g., to purchases of Virtual Items. That means that such purchases are FINAL AND NON-REFUNDABLE. Pricing. Wehookup Inc operates a global business, and our pricing varies by a number of factors. We frequently offer promotional rates – which can vary based on region, length of subscription, bundle size and more. We also regularly test new features and payment options.
                </p>
              </section>
              {" "}
              <section id="copyright">
                <h2>
                  Notice and Procedure for Making Claims of Copyright Infringement.
                </h2>
                {" "}
                <p>
                  If you believe that your work has been copied and posted on the Service in a way that constitutes copyright infringement, please submit a takedown request using the form here If you contact us regarding alleged copyright infringement, please be sure to include the following information:
                </p>
                {" "}
                <ul>
                  <li>
                    an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest;
                  </li>
                  <li>
                    a description of the copyrighted work that you claim has been infringed;
                  </li>
                  <li>
                    a description of where the material that you claim is infringing is located on the Service (and such description must be reasonably sufficient to enable us to find the alleged infringing material);
                  </li>
                  <li>
                    your contact information, including address, telephone number and email address and the copyright owner's identity;
                  </li>
                  <li>
                    a written statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law; and
                  </li>
                  <li>
                    a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.
                  </li>
                </ul>
                {" "}
                <p>
                  Wehookup will terminate the accounts of repeat infringers.
                </p>
              </section>
              {" "}
              <section id="third-party-sites">
                <h2>
                  Links to Third Party Sites/Third Party Services
                </h2>
                {" "}
                <p>
                  Wehookup.com may contain links to other websites ("Linked Sites"). The Linked Sites are not under the control of wehookup inc and wehookup inc is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. wehookup inc is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by wehookup inc of the site or any association with its operators.
                </p>
                {" "}
                <p>
                  Certain services made available via blinkconnect are delivered by third party sites and organizations. By using any product, service or functionality originating from the wehookup.com domain, you hereby acknowledge and consent that wehookup inc may share such information and data with any third party with whom wehookup inc has a contractual relationship to provide the requested product, service or functionality on behalf of wehookup.com users and customers.
                </p>
              </section>
              {" "}
              <section id="prohibited-use">
                <h2>
                  No Unlawful or Prohibited Use/Intellectual Property
                </h2>
                {" "}
                <p>
                  You are granted a non-exclusive, non-transferable, revocable license to access and use wehookup.com strictly in accordance with these terms of use. As a condition of your use of the Site, you warrant to wehookup inc that you will not use the Site for any purpose that is unlawful or prohibited by these Terms. You may not use the Site in any manner which could damage, disable, overburden, or impair the Site or interfere with any other party's use and enjoyment of the Site. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the Site.
                </p>
                {" "}
                <p>
                  All content included as part of the Service, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site, is the property of wehookup inc or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices, legends or other restrictions contained in any such content and will not make any changes thereto.
                </p>
                {" "}
                <p>
                  You will not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create derivative works, or in any way exploit any of the content, in whole or in part, found on the Site. wehookup inc content is not for resale. Your use of the Site does not entitle you to make any unauthorized use of any protected content, and in particular you will not delete or alter any proprietary rights or attribution notices in any content. You will use protected content solely for your personal use, and will make no other use of the content without the express written permission of wehookup inc and the copyright owner. You agree that you do not acquire any ownership rights in any protected content. We do not grant you any licenses, express or implied, to the intellectual property of wehookup inc or our licensors except as expressly authorized by these Terms.
                </p>
              </section>
              {" "}
              <section id="communication-services">
                <h2>
                  Use of Communication Services
                </h2>
                {" "}
                <p>
                  The Site may contain bulletin board services, chat areas, news groups, forums, communities, personal web pages, calendars, and/or other message or communication facilities designed to enable you to communicate with the public at large or with a group (collectively, "Communication Services"). You agree to use the Communication Services only to post, send and receive messages and material that are proper and related to the particular Communication Service.
                </p>
                {" "}
                <p>
                  By way of example, and not as a limitation, you agree that when using a Communication Service, you will not: defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights of privacy and publicity) of others; publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory, infringing, obscene, indecent or unlawful topic, name, material or information; upload files that contain software or other material protected by intellectual property laws (or by rights of privacy of publicity) unless you own or control the rights thereto or have received all necessary consents; upload files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of another's computer; advertise or offer to sell or buy any goods or services for any business purpose, unless such Communication Service specifically allows such messages; conduct or forward surveys, contests, pyramid schemes or chain letters; download any file posted by another user of a Communication Service that you know, or reasonably should know, cannot be legally distributed in such manner; falsify or delete any author attributions, legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded; restrict or inhibit any other user from using and enjoying the Communication Services; violate any code of conduct or other guidelines which may be applicable for any particular Communication Service; harvest or otherwise collect information about others, including e-mail addresses, without their consent; violate any applicable laws or regulations.
                </p>
                {" "}
                <p>
                  wehookup inc has no obligation to monitor the Communication Services. However, wehookup inc reserves the right to review materials posted to a Communication Service and to remove any materials in its sole discretion. wehookup inc reserves the right to terminate your access to any or all of the Communication Services at any time without notice for any reason whatsoever.
                </p>
                {" "}
                <p>
                  wehookup inc reserves the right at all times to disclose any information as necessary to satisfy any applicable law, regulation, legal process or governmental request, or to edit, refuse to post or to remove any information or materials, in whole or in part, in wehookup inc's sole discretion.
                </p>
                {" "}
                <p>
                  Always use caution when giving out any personally identifying information about yourself or your children in any Communication Service. wehookup inc does not control or endorse the content, messages or information found in any Communication Service and, therefore, wehookup inc specifically disclaims any liability with regard to the Communication Services and any actions resulting from your participation in any Communication Service. Managers and hosts are not authorized wehookup inc spokespersons, and their views do not necessarily reflect those of wehookup inc.
                </p>
                {" "}
                <p>
                  Materials uploaded to a Communication Service may be subject to posted limitations on usage, reproduction and/or dissemination. You are responsible for adhering to such limitations if you upload the materials.
                </p>
                {" "}
                <p>
                  Materials Provided to wehookup.com or Posted on Any wehookup inc Web Page wehookup inc does not claim ownership of the materials you provide to blinkconnect (including feedback and suggestions) or post, upload, input or submit to any wehookup inc Site or our associated services (collectively "Submissions"). However, by posting, uploading, inputting, providing or submitting your Submission you are granting wehookup inc, our affiliated companies and necessary sublicensees permission to use your Submission in connection with the operation of their Internet businesses including, without limitation, the rights to: copy, distribute, transmit, publicly display, publicly perform, reproduce, edit, translate and reformat your Submission; and to publish your name in connection with your Submission.
                </p>
                {" "}
                <p>
                  No compensation will be paid with respect to the use of your Submission, as provided herein. wehookup inc is under no obligation to post or use any Submission you may provide and may remove any Submission at any time in wehookup inc's sole discretion.
                </p>
                {" "}
                <p>
                  By posting, uploading, inputting, providing or submitting your Submission you warrant and represent that you own or otherwise control all of the rights to your Submission as described in this section including, without limitation, all the rights necessary for you to provide, post, upload, input or submit the Submissions.
                </p>
              </section>
              {" "}
              <section id="third-party-accounts">
                <h2>
                  Third Party Accounts
                </h2>
                {" "}
                <p>
                  You will be able to connect your wehookup inc account to third party accounts. By connecting your wehookup inc account to your third party account, you acknowledge and agree that you are consenting to the continuous release of information about you to others (in accordance with your privacy settings on those third party sites). If you do not want information about you to be shared in this manner, do not use this feature.
                </p>
                {" "}
                <p>
                  The Service may contain advertisements and promotions offered by third parties and links to other web sites or resources. Wehookup is not responsible for the availability (or lack of availability) of such external websites or resources. If you choose to interact with the third parties made available through our Service, such party's terms will govern their relationship with you. Wehookup is not responsible or liable for such third parties' terms or actions.
                </p>
              </section>
              {" "}
              <section id="international">
                <h2>
                  International Users
                </h2>
                {" "}
                <p>
                  The Service is controlled, operated and administered by wehookup inc from our offices within the USA. If you access the Service from a location outside the USA, you are responsible for compliance with all local laws. You agree that you will not use the wehookup inc Content accessed through wehookup.com in any country or in any manner prohibited by any applicable laws, restrictions or regulations.
                </p>
              </section>
              {" "}
              <section id="indemnification">
                <h2>
                  Indemnification
                </h2>
                {" "}
                <p>
                  You agree to indemnify, defend and hold harmless wehookup inc, its officers, directors, employees, agents and third parties, for any losses, costs, liabilities and expenses (including reasonable attorney's fees) relating to or arising out of your use of or inability to use the Site or services, any user postings made by you, your violation of any terms of this Agreement or your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations. wehookup inc reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with wehookup inc in asserting any available defenses.
                </p>
              </section>
              {" "}
              <section id="arbitration">
                <h2>
                  Arbitration
                </h2>
                {" "}
                <p>
                  In the event the parties are not able to resolve any dispute between them arising out of or concerning these Terms and Conditions, or any provisions hereof, whether in contract, tort, or otherwise at law or in equity for damages or any other relief, then such dispute shall be resolved only by final and binding arbitration pursuant to the Federal Arbitration Act, conducted by a single neutral arbitrator and administered by the American Arbitration Association, or a similar arbitration service selected by the parties, in a location mutually agreed upon by the parties. The arbitrator's award shall be final, and judgment may be entered upon it in any court having jurisdiction. In the event that any legal or equitable action, proceeding or arbitration arises out of or concerns these Terms and Conditions, the prevailing party shall be entitled to recover its costs and reasonable attorney's fees. The parties agree to arbitrate all disputes and claims in regards to these Terms and Conditions or any disputes arising as a result of these Terms and Conditions, whether directly or indirectly, including Tort claims that are a result of these Terms and Conditions. The parties agree that the Federal Arbitration Act governs the interpretation and enforcement of this provision. The entire dispute, including the scope and enforceability of this arbitration provision shall be determined by the Arbitrator. This arbitration provision shall survive the termination of these Terms and Conditions.
                </p>
              </section>
              {" "}
              <section id="class-action">
                <h2>
                  Class Action Waiver
                </h2>
                {" "}
                <p>
                  Any arbitration under these Terms and Conditions will take place on an individual basis; class arbitrations and class/representative/collective actions are not permitted. THE PARTIES AGREE THAT A PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN EACH'S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PUTATIVE CLASS, COLLECTIVE AND/ OR REPRESENTATIVE PROCEEDING, SUCH AS IN THE FORM OF A PRIVATE ATTORNEY GENERAL ACTION AGAINST THE OTHER. Further, unless both you and wehookup inc agree otherwise, the arbitrator may not consolidate more than one person's claims, and may not otherwise preside over any form of a representative or class proceeding.
                </p>
              </section>
              {" "}
              <section id="liability">
                <h2>
                  Liability Disclaimer
                </h2>
                {" "}
                <p>
                  THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. WEHOOKUP INC AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME.
                </p>
                {" "}
                <p>
                  WEHOOKUP INC AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND. WEHOOKUP INC AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.
                </p>
                {" "}
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WEHOOKUP INC AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, WITH THE DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE USE OF THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF WEHOOKUP INC OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE.
                </p>
              </section>
              {" "}
              <section id="data-retention">
                <h2>
                  Data Retention and Removal
                </h2>
                {" "}
                <ol className="num-list">
                  <li>
                    As long as the account is active all the data is retained by the company to provide necessary services to users on the website and the mobile app.
                  </li>
                  <li>
                    In scenarios where a user account is reported for unusual activity, violation of community guidelines, violation of safety guidelines on app and website, account will be suspended and data will be retained for next 90 days.
                  </li>
                  <li>
                    In a scenario where a user account is deleted by the user himself/herself. Email address, and full name will be retained for next 90 days. Chats/messages from the relevant account will be removed after 7 days.
                  </li>
                  <li>
                    Users can always request for removal of data based on local govt and privacy laws. We will always do our best to comply with local laws. In the event of request by the user to remove data, email and name will be retained for next 90 days, if in case required for any legal assessment.
                  </li>
                  <li>
                    Order details like amount, card last 4 digits, subscription start/end dates, will be retained for a minimum of 365 days for financial review and audits.
                  </li>
                </ol>
              </section>
              {" "}
              <section id="termination">
                <h2>
                  Termination/Access Restriction
                </h2>
                {" "}
                <p>
                  Wehookup inc reserves the right, in its sole discretion, to terminate your access to the Site and the related services or any portion thereof at any time, without notice. To the maximum extent permitted by law, this agreement is governed by the laws of the State of New Jersey and you hereby consent to the exclusive jurisdiction and venue of courts in New Jersey in all disputes arising out of or relating to the use of the Site. Use of the Site is unauthorized in any jurisdiction that does not give effect to all provisions of these Terms, including, without limitation, this section.
                </p>
                {" "}
                <p>
                  You agree that no joint venture, partnership, employment, or agency relationship exists between you and wehookup inc as a result of this agreement or use of the Site. wehookup inc's performance of this agreement is subject to existing laws and legal process, and nothing contained in this agreement is in derogation of wehookup inc's right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Site or information provided to or gathered by wehookup inc with respect to such use. If any part of this agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the agreement shall continue in effect.
                </p>
                {" "}
                <p>
                  Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and wehookup inc with respect to the Site and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and wehookup inc with respect to the Site. A printed version of this agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. It is the express wish to the parties that this agreement and all related documents be written in English.
                </p>
              </section>
              {" "}
              <section id="changes">
                <h2>
                  Changes to Terms
                </h2>
                {" "}
                <p>
                  Wehookup inc reserves the right, in its sole discretion, to change the Terms under which wehookup.com is offered. The most current version of the Terms will supersede all previous versions. wehookup inc encourages you to periodically review the Terms to stay informed of our updates.
                </p>
              </section>
              {" "}
              <section id="contact">
                <h2>
                  Contact Us
                </h2>
                {" "}
                <p>
                  Wehookup inc welcomes your questions or comments regarding the Terms:
                </p>
                {" "}
                <div className="contact-card">
                  <strong>
                    Wehookup Inc
                  </strong>
                  {" "}
                  <span>
                    P.O. Box 532
                  </span>
                  {" "}
                  <span>
                    Middlesex, New Jersey 08846
                  </span>
                  {" "}
                  <span>
                    Contact:{" "}
                    <Link href="/contact/">contact page</Link>
                  </span>
                  {" "}
                  <span>
                    Telephone number:{" "}
                    <a href="tel:+17326406068">
                      7326406068
                    </a>
                  </span>
                </div>
                {" "}
                <p className="effective">
                  Effective as of May 18, 2024
                </p>
              </section>
            </article>
            {" "}
            <a href="#top" className="back-top">
              Back to top
              <svg className="i" width="16" height="16" aria-hidden="true">
                <use href="#i-arrow-up" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {" "}
      <section className="download" id="download">
        <svg className="rings" viewBox="0 0 400 400" aria-hidden="true">
          <circle cx="200" cy="200" r="198" fill="none" stroke="#fff" strokeWidth="0.8" />
          <circle cx="200" cy="200" r="150" fill="none" stroke="#fff" strokeWidth="0.8" strokeDasharray="3 5" />
          <circle cx="200" cy="200" r="102" fill="none" stroke="#fff" strokeWidth="0.8" />
          <circle cx="200" cy="200" r="56" fill="#F7891F" opacity="0.5" />
        </svg>
        {" "}
        <div className="wrap dl-grid">
          <div className="dl-copy reveal">
            <span className="label" style={{ "color": "#FFFFFF" }}>
              Get the app
            </span>
            {" "}
            <h2>
              Ready to get started?
            </h2>
            {" "}
            <p>
              Download BlinkConnect and start building meaningful connections today.
            </p>
            {" "}
            <div className="stores">
              <a href={SITE.appStoreUrl} className="store dark" aria-label="Download on the App Store">
                <svg className="i" width="26" height="26" style={{ "strokeWidth": "1.8" }} aria-hidden="true">
                  <use href="#i-phone" />
                </svg>
                <span>
                  <small>
                    Download on the
                  </small>
                  <strong>
                    App Store
                  </strong>
                </span>
              </a>
              {" "}
              <a href={SITE.googlePlayUrl} className="store dark" aria-label="Get it on Google Play">
                <svg className="i" width="24" height="24" style={{ "strokeWidth": "1.8" }} aria-hidden="true">
                  <use href="#i-play" />
                </svg>
                <span>
                  <small>
                    Get it on
                  </small>
                  <strong>
                    Google Play
                  </strong>
                </span>
              </a>
            </div>
          </div>
          {" "}
          <div className="dl-phones" aria-hidden="true">
            <div className="ph a">
              <img src="/images/app-profile-screen.png" width="1290" height="2796" alt="" loading="lazy" />
            </div>
            {" "}
            <div className="ph b">
              <img src="/images/app-discover-screen.png" width="1290" height="2796" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </main>
      <PageScript />
    </div>
  );
}
