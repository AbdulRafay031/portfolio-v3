from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

font_dir = Path(os.environ.get("CV_FONT_DIR", "/usr/share/fonts/truetype/dejavu"))
pdfmetrics.registerFont(TTFont("CVSans", str(font_dir / "DejaVuSans.ttf")))
pdfmetrics.registerFont(TTFont("CVSans-Bold", str(font_dir / "DejaVuSans-Bold.ttf")))
pdfmetrics.registerFontFamily("CVSans", normal="CVSans", bold="CVSans-Bold")

out = Path(__file__).resolve().parents[1] / "public" / "Abdul-Rafay-Odoo-Techno-Functional-Consultant.pdf"
ink = colors.HexColor("#172033")
accent = colors.HexColor("#5845A5")
styles = {
    "name": ParagraphStyle("name", fontName="CVSans-Bold", fontSize=29, leading=34, textColor=ink),
    "role": ParagraphStyle("role", fontName="CVSans-Bold", fontSize=14, leading=20, textColor=accent),
    "heading": ParagraphStyle("heading", fontName="CVSans-Bold", fontSize=11, leading=16, textColor=accent, spaceBefore=13, spaceAfter=5),
    "body": ParagraphStyle("body", fontName="CVSans", fontSize=10, leading=15, textColor=ink, spaceAfter=5),
    "contact": ParagraphStyle("contact", fontName="CVSans", fontSize=9, leading=14, textColor=ink),
}
story = []
def add(value, style="body"):
    story.append(Paragraph(value, styles[style]))
add("Abdul Rafay", "name")
add("Odoo Techno-Functional Consultant", "role")
add("Karachi, Pakistan | +92-3161163799 | rafay16031@gmail.com", "contact")
add('<link href="https://portfolio-v3-sage-delta.vercel.app" color="#5845A5">Portfolio</link> • <link href="https://www.linkedin.com/in/abdul-rafay-a6569b3a7" color="#5845A5">LinkedIn</link> • <link href="https://github.com/AbdulRafay031" color="#5845A5">GitHub</link>', "contact")
story.append(Spacer(1, 12))
story.append(HRFlowable(width="100%", thickness=1, color=accent))
add("PROFESSIONAL PROFILE", "heading")
add("Odoo techno-functional consultant with a full-stack development background. Focused on connecting business requirements with ERP configuration, testing and technical customization. Combines process-oriented consulting with Python, web development and API integration knowledge.")
add("PROFESSIONAL EXPERIENCE", "heading")
add("<b>TechHub | Odoo Techno-Functional Consultant</b> — Current")
add("Focus areas: business process mapping, Odoo configuration and functional testing; technical customization, reporting and integration.")
add("<b>KDYS Lab Pvt Ltd | Frontend Developer</b> — 2026")
add("<b>CodSoft | Frontend Developer</b> — 2025–2026")
add("<b>Fiverr | MERN Stack Freelancer</b> — 2023–2026")
add("AREAS OF EXPERTISE", "heading")
add("<b>Functional:</b> Manufacturing and bills of materials, inventory and stock movements, purchase and sales workflows, accounting workflows, business process analysis, ERP configuration and testing.")
add("<b>Technical:</b> Python, Odoo ORM, custom modules and models, XML views and actions, QWeb reporting, API integration, PostgreSQL fundamentals.")
add("<b>Software development:</b> JavaScript, React, Next.js, Node.js, Express.js, REST APIs, Git and GitHub.")
add("EDUCATION &amp; TRAINING", "heading")
add("<b>Sindh Madressatul Islam University</b> | BS Computer Science, 2022–2026")
add("<b>SMIT</b> | Web Application Development, 2024")
add("<b>GIAIC</b> | Meta AI, Python and Prompt Engineering, 2025–2026")
add("LANGUAGES", "heading")
add("English — Fluent | Urdu — Native")
SimpleDocTemplate(str(out), pagesize=A4, rightMargin=42, leftMargin=42, topMargin=36, bottomMargin=36, title="Abdul Rafay - Odoo Techno-Functional Consultant", author="Abdul Rafay").build(story)
