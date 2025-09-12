import {
  HeaderResponsiveContainer,
  HeaderResponsiveSearchBar,
} from "@/components/Header/Responsive";

import { cn } from "@/lib/utils";

/**
 * @typedef {Object} SearchBarResponsiveLayoutProps
 * @property {() => void | undefined} onClickBackButton
 * @property {string | undefined} placeholder
 * @property {React.ReactNode} children
 */

/**
 * @param {SearchBarResponsiveLayoutProps} props
 * @returns {React.ReactNode}
 */
const SearchBarResponsiveLayout = ({
  children,
  onClickBackButton,
  placeholder,
  className,
  withMenu,
  onEnterPress,
  shouldResetSearchValue,
  isDisabled = false,
}) => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderResponsiveContainer
        variant="muatpartsplus"
        className="relative flex h-[62px] items-center px-4"
      >
        <img src="/icons/falin-star.svg" alt="" className="absolute right-0" />

        <HeaderResponsiveSearchBar
          onClickBackButton={onClickBackButton}
          placeholder={placeholder}
          withMenu={withMenu}
          onEnterPress={onEnterPress}
          shouldResetSearchValue={shouldResetSearchValue}
          isDisabled={isDisabled}
        />
      </HeaderResponsiveContainer>
      <main
        className={cn(
          "grid h-full min-h-[calc(100vh-62px)] grid-cols-1 items-start justify-start",
          className
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default SearchBarResponsiveLayout;
