"use client";

import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Check, Clock, X } from "lucide-react";

const timelineVariants = cva("relative flex flex-col", {
  variants: {
    variant: {
      default: "gap-4",
      compact: "gap-2",
      spacious: "gap-8",
    },
    orientation: {
      vertical: "flex-col",
      horizontal: "flex-row",
    },
  },
  defaultVariants: {
    variant: "default",
    orientation: "vertical",
  },
});

const timelineItemVariants = cva("relative flex gap-3 pb-2", {
  variants: {
    orientation: {
      vertical: "flex-row",
      horizontal: "flex-col min-w-64 shrink-0",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

const timelineConnectorVariants = cva("bg-border", {
  variants: {
    orientation: {
      vertical: "absolute left-3 top-9 h-full w-px",
      horizontal: "absolute top-3 left-8 w-full h-px",
    },
    status: {
      default: "bg-border",
      completed: "bg-primary",
      active: "bg-primary",
      pending: "bg-muted-foreground/30",
      error: "bg-destructive",
    },
  },
  defaultVariants: {
    orientation: "vertical",
    status: "default",
  },
});

const timelineIconVariants = cva(
  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 bg-background text-xs font-medium",
  {
    variants: {
      status: {
        default: "border-border text-muted-foreground",
        completed: "border-primary bg-primary text-primary-foreground",
        active: "border-primary bg-background text-primary animate-pulse",
        pending: "border-muted-foreground/30 text-muted-foreground",
        error: "border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      status: "default",
    },
  }
);

function getStatusIcon(status) {
  switch (status) {
    case "completed":
      return <Check className='h-3 w-3' />;
    case "active":
      return <Clock className='h-3 w-3' />;
    case "pending":
      return <Clock className='h-3 w-3' />;
    case "error":
      return <X className='h-3 w-3' />;
    default:
      return <div className='h-2 w-2 rounded-full bg-current' />;
  }
}

function formatTimestamp(timestamp) {
  if (!timestamp) return "";
  const date = typeof timestamp === "string" ? new Date(timestamp) : timestamp;

  if (typeof timestamp === "string" && /^\d{4}$/.test(timestamp)) {
    return timestamp;
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function Timeline({
  items,
  className,
  variant,
  orientation = "vertical",
  showConnectors = true,
  showTimestamps = true,
  timestampPosition = "top",
  ...props
}) {
  const timelineContent = (
    <div
      className={cn(
        timelineVariants({ variant, orientation }),
        orientation === "horizontal" ? "pb-4" : ""
      )}
    >
      {items.map((item, index) => (
        <div
          key={item.id}
          className={cn(timelineItemVariants({ orientation }))}
        >
          {showConnectors && index < items.length - 1 && (
            <div
              className={cn(
                timelineConnectorVariants({
                  orientation,
                  status: item.status,
                })
              )}
            />
          )}
          <div className='relative z-10 flex shrink-0'>
            <div className={cn(timelineIconVariants({ status: item.status }))}>
              {item.icon || getStatusIcon(item.status)}
            </div>
          </div>
          <div className='flex min-w-0 flex-1 flex-col gap-2'>
            {showTimestamps &&
              timestampPosition === "top" &&
              item.timestamp && (
                <time className='text-xs text-muted-foreground'>
                  {item.timestamp}
                </time>
              )}
            <div className='flex items-start justify-between gap-2'>
              <h3 className='font-medium leading-tight'>{item.title}</h3>
              {showTimestamps &&
                timestampPosition === "inline" &&
                item.timestamp && (
                  <time className='shrink-0 text-xs text-muted-foreground'>
                    {item.timestamp}
                  </time>
                )}
            </div>
            {item.description && (
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {item.description}
              </p>
            )}
            {item.content && <div className='mt-3'>{item.content}</div>}
            {showTimestamps &&
              timestampPosition === "bottom" &&
              item.timestamp && (
                <time className='text-xs text-muted-foreground'>
                  {formatTimestamp(item.timestamp)}
                </time>
              )}
          </div>
        </div>
      ))}
    </div>
  );

  if (orientation === "horizontal") {
    return (
      <ScrollArea
        orientation='horizontal'
        className={cn("w-full", className)}
        {...props}
      >
        {timelineContent}
      </ScrollArea>
    );
  }

  return (
    <div className={className} {...props}>
      {timelineContent}
    </div>
  );
}

export {
  timelineVariants,
  timelineItemVariants,
  timelineConnectorVariants,
  timelineIconVariants,
};
