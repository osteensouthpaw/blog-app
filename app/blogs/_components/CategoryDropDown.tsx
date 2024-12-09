import { Category } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { Control, Controller } from "react-hook-form";
import { BlogFormData } from "./BlogForm";

interface Props {
  categories: Category[];
  control: Control<BlogFormData>;
  defaultValue: number | undefined;
}

const CategoryDropDown = ({ categories, control, defaultValue }: Props) => {
  return (
    <Controller
      defaultValue={defaultValue?.toString() || "category"}
      name="categoryId"
      control={control}
      render={({ field }) => (
        <Select.Root
          value={field.value?.toString() || "category"}
          onValueChange={(value) => field.onChange(value)}
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
      )}
    />
  );
};

export default CategoryDropDown;
