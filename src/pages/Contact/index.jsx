import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);
  };
  return (
    <Layout>
      <Header title="聯絡我們" subTitle="聯絡我們" />
      <div className="bg-light w-75 mx-auto my-5 text-center p-3 w-md-60">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatem
        consequuntur deleniti quis vitae itaque?
      </div>
      <Form
        className="w-75 mx-auto my-5 w-md-60"
        onSubmit={handleSubmit}
        noValidate
        validated={validated}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>姓名(必填)</Form.Label>
          <Form.Control type="text" placeholder="" required />
          <Form.Control.Feedback type="invalid">
            請填寫姓名
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicSelect" className="mb-3">
          <Form.Label>稱為</Form.Label>
          <Form.Control as="select">
            <option value="mr">先生</option>
            <option value="ms">小姐</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>電子郵件(必填)</Form.Label>
          <Form.Control type="email" placeholder="" required />
          <Form.Control.Feedback type="invalid">
            請填寫電子郵件
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>主旨</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>留言</Form.Label>
          <Form.Control as="textarea" rows={3} required />
          <Form.Control.Feedback type="invalid">
            請填寫留言
          </Form.Control.Feedback>
        </Form.Group>
        <Button className="w-100 mt-4" type="submit">
          傳送
        </Button>
      </Form>
    </Layout>
  );
};

export default Contact;
