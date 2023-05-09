import Head from 'next/head'
import Layout from '@/components/Layout'
import PageTitle from '@/components/PageTitle'
import BulletContact from '@/components/BulletContact'
import ContactForm from '@/components/ContactForm'

const Contact = () => {

  return (
    <Layout>
      <PageTitle title="Contact Me" type="get in touch" align="center"></PageTitle>
      <BulletContact></BulletContact>
      <ContactForm></ContactForm>
    </Layout>
  );
};

export default Contact;
