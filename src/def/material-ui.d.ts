import * as Material from "@material-ui/core/styles";

declare module "@material-ui/core/styles" {
    type StyleComponentProps = { classes?: Record<string, string> };
    declare const withStyles: ((styles: Material.StyleRules | ((theme: Material.Theme) => Record<string, CSSProperties>)) => (target: React.ComponentType<StyleComponentProps>) => void);
}
