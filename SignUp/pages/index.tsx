import { Form, Input, Button } from "antd";
import React, { useCallback, useState } from "react";
import AppLayOut from "../components/AppLayOut";
import useInput from "../hooks/useInput";

const IndexPage = () => {
  const [id, onChangeId] = useInput("");
  const [nick, onChangeNick] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmit = useCallback((e: any) => {}, []);
  return (
    <>
      <AppLayOut>
        <Form>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input
              type="text"
              id="user-id"
              required
              value={id}
              onChange={onChangeId}
            />
          </div>
          <div>
            <label htmlFor="user-nickname">닉네임</label>
            <br />
            <Input id="user-nickname" />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input id="user-password" />
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호 확인</label>
            <br />
            <Input id="user-password-check" />
          </div>
          <div>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </Form>
      </AppLayOut>
    </>
  );
};

export default IndexPage;
