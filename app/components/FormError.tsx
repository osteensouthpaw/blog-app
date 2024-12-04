import { Callout } from "@radix-ui/themes";
import { BiInfoCircle } from "react-icons/bi";

const FormError = ({ message }: { message?: string }) => {
  return (
    message && (
      <Callout.Root>
        <Callout.Icon>
          <BiInfoCircle />
        </Callout.Icon>
        <Callout.Text color="red">{message}</Callout.Text>
      </Callout.Root>
    )
  );
};

export default FormError;
