type CorporateTemplateProps = {
  name: string;
  email: string;
  phone: string;
  message: string;
  companyName: string;
  employeeCount: string;
  englishLevel: string;
  frequency: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function corporateTemplate({
  name,
  email,
  phone,
  message,
  companyName,
  employeeCount,
  englishLevel,
  frequency,
}: CorporateTemplateProps) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Neuvedené");
  const safeMessage = escapeHtml(message || "Neuvedené");
  const safeCompanyName = escapeHtml(companyName);
  const safeEmployeeCount = escapeHtml(employeeCount);
  const safeEnglishLevel = escapeHtml(englishLevel);
  const safeFrequency = escapeHtml(frequency);

  return `
    <!DOCTYPE html>
    <html lang="sk">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body style="
        margin: 0;
        padding: 0;
        background-color: #f4f6fa;
        font-family: Arial, Helvetica, sans-serif;
        color: #1a2744;
      ">
        <div style="
          max-width: 680px;
          margin: 0 auto;
          padding: 32px 16px;
        ">
          <div style="
            overflow: hidden;
            background-color: #ffffff;
            border: 1px solid #e1e6ef;
            border-radius: 20px;
          ">
            <div style="
              padding: 28px 32px;
              background-color: #1a2744;
            ">
              <p style="
                margin: 0 0 8px;
                color: #c9a227;
                font-size: 12px;
                font-weight: 700;
                letter-spacing: 1.5px;
                text-transform: uppercase;
              ">
                Firemné vzdelávanie
              </p>

              <h1 style="
                margin: 0;
                color: #ffffff;
                font-size: 26px;
                line-height: 1.3;
              ">
                Nová žiadosť o cenovú ponuku
              </h1>
            </div>

            <div style="padding: 32px;">
              <h2 style="
                margin: 0 0 20px;
                color: #1a2744;
                font-size: 19px;
              ">
                Informácie o firme
              </h2>

              ${createRow("Názov firmy", safeCompanyName)}
              ${createRow("Počet zamestnancov", safeEmployeeCount)}
              ${createRow("Úroveň angličtiny", safeEnglishLevel)}
              ${createRow("Frekvencia výučby", safeFrequency)}

              <h2 style="
                margin: 32px 0 20px;
                color: #1a2744;
                font-size: 19px;
              ">
                Kontaktné údaje
              </h2>

              ${createRow("Kontaktná osoba", safeName)}
              ${createRow("E-mail", safeEmail)}
              ${createRow("Telefón", safePhone)}

              <h2 style="
                margin: 32px 0 12px;
                color: #1a2744;
                font-size: 19px;
              ">
                Správa / ďalšie informácie
              </h2>

              <div style="
                padding: 18px;
                background-color: #f5f8ff;
                border: 1px solid #e1e8f5;
                border-radius: 12px;
                color: #4f5868;
                font-size: 15px;
                line-height: 1.7;
                white-space: pre-wrap;
              ">${safeMessage}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

function createRow(label: string, value: string) {
  return `
    <div style="
      display: flex;
      padding: 13px 0;
      border-bottom: 1px solid #edf0f5;
    ">
      <div style="
        width: 190px;
        padding-right: 16px;
        color: #7a8291;
        font-size: 14px;
        font-weight: 700;
      ">
        ${label}
      </div>

      <div style="
        flex: 1;
        color: #1a2744;
        font-size: 14px;
        font-weight: 600;
      ">
        ${value}
      </div>
    </div>
  `;
}
