
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="flex items-center text-sm text-muted-foreground mb-8">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight className="mx-2 h-4 w-4" />}
          {item.href ? (
            <Link to={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium truncate">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
