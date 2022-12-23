import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Form, Input } from "antd";
import { addData, createDB, deleteData, updateData } from "./indexedDB/db";
const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 24 },
};
function App() {
  const [form] = Form.useForm();
  const input = form.getFieldValue;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <Form form={form} {...layout} labelAlign="left">
            <Form.Item name="dbName">
              <Input placeholder="DB name" width={200} />
            </Form.Item>
            <Form.Item name="storeName">
              <Input placeholder="Store name" width={200} />
            </Form.Item>
            <Form.Item name="key">
              <Input placeholder="Key" width={200} />
            </Form.Item>
            <Form.Item name="value">
              <Input placeholder="Content" width={200} />
            </Form.Item>
          </Form>
          <div>
            <Button
              type="default"
              className="btn"
              onClick={() => createDB(input("dbName"), input("storeName"))}
            >
              CREATE DB
            </Button>
            <Button
              type="default"
              className="btn"
              onClick={() =>
                addData(
                  input("dbName"),
                  input("storeName"),
                  input("value"),
                  input("key")
                )
              }
            >
              ADD DATA
            </Button>
            <Button
              type="default"
              className="btn"
              onClick={() =>
                updateData(
                  input("dbName"),
                  input("storeName"),
                  input("value"),
                  input("key")
                )
              }
            >
              UPDATE DATA
            </Button>
            <Button
              type="default"
              className="btn"
              onClick={() =>
                deleteData(input("dbName"), input("storeName"), input("key"))
              }
            >
              DELETE DATA
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
