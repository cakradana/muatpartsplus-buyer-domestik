import {
  HeaderButtonBack,
  HeaderResponsiveContainer,
} from "@/components/Header/Responsive";

import { cn } from "@/lib/utils";

import { useNotificationCounterStore } from "@/store/Shipper/notificationCounterStore";

/**
 * @typedef {Object} PrimaryResponsiveLayoutProps
 * @property {React.ReactNode} children
 * @property {"default" | "menu"} mode
 * @property {() => void | undefined} onClickBackButton
 * @property {() => void | undefined} onClickNotificationButton
 * @property {() => void | undefined} onClickChatButton
 * @property {() => void | undefined} onClickMenuButton
 */

/**
 * @param {PrimaryResponsiveLayoutProps} props
 * @returns {React.ReactNode}
 */
const PrimaryResponsiveLayout = ({
  children,
  mode = "default",
  onClickBackButton,
  className,
}) => {
  return (
    <div className="min-h-screen bg-primary-700">
      <HeaderResponsiveContainer
        variant="muatmuat"
        className="relative flex h-[62px] items-center px-4"
      >
        {onClickBackButton && (
          <HeaderButtonBack
            onClick={onClickBackButton}
            variant="muatmuat"
            className="absolute left-4 z-10"
          />
        )}
        <img
          src="/icons/primary-fallin-star.svg"
          alt=""
          className="absolute left-0 top-1/2 -translate-y-1/2 transform"
        />
        <img
          src="/img/otp-transporter/muatmuat.svg"
          alt="muatmuat"
          className="absolute left-1/2 top-1/2 h-8 -translate-x-1/2 -translate-y-1/2 transform"
        />
      </HeaderResponsiveContainer>
      <main className={cn("min-h-[calc(100vh-62px)]", className)}>
        {children}
      </main>
    </div>
  );
};

export default PrimaryResponsiveLayout;
