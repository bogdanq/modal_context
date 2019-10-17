import React from "react";
import {
  ModalHeader,
  ModalType,
  ModalWrapper
} from "../lib/react-custom-modal";

type Props = {
  onRequestClose: () => void;
  type?: keyof ModalType;
};

export const ModalFirst = ({ onRequestClose, type }: Props) => {
  return (
    <ModalWrapper onRequestClose={onRequestClose} type={type}>
      <ModalHeader title="Some modal" />
      <div>
        1111 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        consectetur euismod erat. Sed imperdiet sollicitudin urna non
        sollicitudin. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Nullam id tristique tortor. In sodales augue sed lectus congue
        ullamcorper. Integer sit amet nisl tellus. Nam in condimentum nibh.
      </div>
      <br />
      <div>
        Donec posuere felis mauris, vel commodo elit dapibus nec. Proin nec leo
        non massa dictum consequat sed ac nunc. Aenean sollicitudin id urna in
        pellentesque. Proin metus turpis, cursus nec tempor quis, pulvinar
        hendrerit nunc. Maecenas a posuere metus, ut varius libero. Nam
        ullamcorper tortor mauris, sit amet imperdiet justo congue vitae. Nam
        eget magna nisl. Ut neque nibh, viverra a consectetur vitae, congue eu
        nulla. Vestibulum hendrerit elementum lectus a ornare. Sed ornare lacus
        quis orci fermentum blandit. Nulla facilisi. Phasellus dolor felis,
        posuere quis laoreet sed, egestas nec sapien. Aenean in varius nisi.
        Mauris vulputate finibus quam, at condimentum massa ullamcorper sed.
      </div>
      <br />
    </ModalWrapper>
  );
};
