import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

RECIPIENT = "k56858378@gmail.com"
SENDER = "k56858378@gmail.com"

def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта на email владельца."""
    cors = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors, "body": ""}

    try:
        body = json.loads(event.get("body") or "{}")
        name = body.get("name", "").strip() or "Не указано"
        phone = body.get("phone", "").strip()

        if not phone:
            return {
                "statusCode": 400,
                "headers": cors,
                "body": json.dumps({"error": "Телефон обязателен"}),
            }

        smtp_password = os.environ.get("SMTP_PASSWORD", "")

        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"Новая заявка с сайта — {phone}"
        msg["From"] = SENDER
        msg["To"] = RECIPIENT

        html = f"""
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto;">
            <h2 style="color: #c8a035;">Новая заявка с сайта</h2>
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 8px; font-weight: bold; color: #555;">Имя:</td>
                    <td style="padding: 8px;">{name}</td>
                </tr>
                <tr style="background: #f9f9f9;">
                    <td style="padding: 8px; font-weight: bold; color: #555;">Телефон:</td>
                    <td style="padding: 8px; font-size: 18px;"><a href="tel:{phone}">{phone}</a></td>
                </tr>
            </table>
            <p style="color: #888; font-size: 13px; margin-top: 20px;">
                Заявка получена с сайта вскрытия замков в Сочи
            </p>
        </div>
        """

        msg.attach(MIMEText(html, "html"))

        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(SENDER, smtp_password)
            server.sendmail(SENDER, RECIPIENT, msg.as_string())

        return {
            "statusCode": 200,
            "headers": cors,
            "body": json.dumps({"ok": True}),
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "headers": cors,
            "body": json.dumps({"error": str(e)}),
        }
