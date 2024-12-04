import { Callout } from "@radix-ui/themes";
import { BiInfoCircle } from "react-icons/bi";

const FormSuccess = ({ message }: { message?: string }) => {
  return (
    message && (
      <Callout.Root>
        <Callout.Icon>
          <BiInfoCircle />
        </Callout.Icon>
        <Callout.Text>{message}</Callout.Text>
      </Callout.Root>
    )
  );
};

export default FormSuccess;
