import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    width: "90%",
    marginTop: 40,
    marginHorizontal: 20,
    alignSelf: "center",
    paddingHorizontal: 16,
    paddingBottom: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: THEME.COLORS.BACKGROUND_700,
    borderRadius: 8,
    overflow: "hidden",
  },
  text: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
  },
  label: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  days: {
    display: "flex",
    flexDirection: "row",
  },
  picker: {
    borderRadius: 4,
    width: "90%",
    height: 40,
    backgroundColor: THEME.COLORS.BACKGROUND_800,
  },
  boxSelect: {
    borderColor: THEME.COLORS.BACKGROUND_800,
    backgroundColor: THEME.COLORS.BACKGROUND_800,
  },
  checkbox: {
    width: 30,
    height: 30,
    margin: 5,
    borderRadius: 4,
    backgroundColor: THEME.COLORS.BACKGROUND_800,
    alignItems: 'center',
    justifyContent: 'center'
},
selected:{
    width: 30,
    height: 30,
    margin: 5,
    borderRadius: 4,
    backgroundColor: THEME.COLORS.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center'
},
});
