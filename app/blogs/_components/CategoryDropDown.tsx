import { Category } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { UseFormRegister } from "react-hook-form";
import { BlogFormData } from "./BlogForm";

interface Props {
  categories: Category[];
  register: UseFormRegister<BlogFormData>;
  defaultValue: number | undefined;
}

const CategoryDropDown = ({ categories, register, defaultValue }: Props) => {
  return (
    <Select.Root
      defaultValue={defaultValue?.toString() || "category"}
      {...register("category")}
    >
      <Select.Trigger />
      <Select.Content>
        <Select.Item value="category" disabled>
          Select Category
        </Select.Item>
        {categories.map((category) => (
          <Select.Item key={category.id} value={category.id.toString()}>
            {category.name}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default CategoryDropDown;
