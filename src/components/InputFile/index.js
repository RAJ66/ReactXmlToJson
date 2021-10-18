import React from "react";
import "antd/dist/antd.css";

import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function InputFile() {
  return (
    <div>
      <Upload>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </div>
  );
}

export default InputFile;
