import type { Metadata } from 'next';
import AuditForm from '@/components/AuditForm';

export const metadata: Metadata = {
  title: 'Contact StoreStride',
  description: 'Contact StoreStride — Amazon PPC Agency UK. Email amzservices@storestride.com, phone +44 7950 471 970, 13 Holdich Street, Peterborough, PE3 6DH, England, UK. Book a free account audit.',
  alternates: { canonical: '/contact' },
};

export default function Contact() {
  return (
    <section className="section"><div className="container" style={{ maxWidth: 760 }}>
      <span className="eyebrow">Contact Us</span>
      <h1>Get Your Free Audit</h1>
      <p className="lead">Start scaling your Amazon brand today. Fill in the form and we&apos;ll deliver a full account audit — no commitment, no sales pressure, just real insights.</p>
      <p><b>Email:</b> <a href="mailto:amzservices@storestride.com">amzservices@storestride.com</a><br /><b>Phone / WhatsApp:</b> <a href="tel:+447950471970">+44 7950 471 970</a><br /><b>Address:</b> 13 Holdich Street, Peterborough, PE3 6DH, England, UK</p>
      <AuditForm />
    </div></section>
  );
}
