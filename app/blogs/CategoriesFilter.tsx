"use client";
import { Category } from "@prisma/client";
import { Badge, Button, Flex } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

interface Props {
  categories: Category[];
}

const CategoriesFilter = ({ categories }: Props) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<
    number | undefined
  >();

  return (
    <Flex gap="3" wrap="wrap">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => {
            setSelectedCategory(category.id);
            const query = selectedCategory
              ? `category=${selectedCategory}`
              : "";

            router.push(`blogs?${query}`);
          }}
        >
          <Badge size="3">{category.name}</Badge>
        </button>
      ))}
    </Flex>
  );
};

export default CategoriesFilter;
