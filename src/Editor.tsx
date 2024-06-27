import { Suspense, lazy } from 'react';
import { Editor } from 'amis-editor';


export default function AmisEditor(props) {

  const schema = {};

  return (

      <Editor
        theme={'antd'}
        className="h-full w-full"
        preview={false}
        isMobile={false}
        value={schema}
        onChange={() => {
        }}
        onPreview={() => {
        }}
        onSave={() => {
        }}
        showCustomRenderersPanel={true}
        {...props}
        />
  )
}