from reportlab.platypus import SimpleDocTemplate, Paragraph

def create_pdf(content, filename):
    doc = SimpleDocTemplate(f"{filename}.pdf")
    elements = [Paragraph(content)]
    doc.build(elements)
    return f"{filename}.pdf"