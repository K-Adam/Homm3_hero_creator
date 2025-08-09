import { SpecialtyLevel } from "./specialty";

export interface SpecialtyContent {
  [SpecialtyLevel.One]: string;
  [SpecialtyLevel.Four]: string;
  [SpecialtyLevel.Six]: string;
}

export const specialtyContentExample = {
  [SpecialtyLevel.One]: `:ongoing: For this Combat, your selected unit's :health: is increased by 1.
 
This effect doubles for the
Liches unit.`,
  [SpecialtyLevel.Four]: `:instant: Your selected unit gains +1 :attack:.
:or:
:instant: Your selected unit gains +1 :defense:.
 
This effect doubles for the
Liches unit.`,
  [SpecialtyLevel.Six]: `:instant: Your selected unit gains +2 :defense:.
 
This effect doubles for the
Liches unit.`,
};
