function countOfAtoms(formula: string) {
  // ("((N42)24(OB40Li30CHe3O48LiNN26)33(C12Li48N30H13HBe31)21(BHN30Li26BCBe47N40)15(H5)16)14");
  let newFormula = {};
  let elem = "";

  const findElements = (formulaAti: string, ind: number) => {
    if (!Number(formulaAti)) {
      if (formulaAti === formulaAti.toUpperCase()) {
        elem = "";
        elem = elem + formulaAti;
      } else {
        elem = elem + formulaAti;
      }
      if (ind === formula.length - 1) {
        newFormula[ind] = elem;
        elem = "";
      }
      return;
    }

    if (Number(formulaAti)) {
      elem = elem + formulaAti;
      if (Number(formula[ind + 1])) {
        elem = elem + formulaAti;
      }
      newFormula[ind] = elem;
      elem = "";
      return;
    }
  };

  const fineEndPara = (ind: number) => {
    let openPara: number = ind;
    let endPara: number = 0;

    for (let j = ind + 1; j < formula.length; j++) {
      if (formula[j] === ")") {
        const enterPara = formula.slice(openPara + 1, j - 1);

        break;
      } else if (formula[j] === "(") {
        fineEndPara(j);
      }
      // else {
      //   findElements(formula[j], j);
      // }
    }
    // return { para };
  };

  for (let i = 0; i < formula.length; i++) {
    let tempElem = "";
    if (formula[i] === "(") {
      // const { para } = fineEndPara(i);
      break;
    } else if (formula[i] === ")") {
      break;
    } else {
      findElements(formula[i], i);
      break;
    }
  }
  console.log("K4(ON(SO3)2)2");
  console.log(newFormula);
  // console.log(newFormula.sort().join(""));
  return "";
}

// countOfAtoms("H2O");
// countOfAtoms("H2OAg3");
countOfAtoms("Mg(OH)2");
// countOfAtoms("K4(ON(SO3)2)2");

/**
 * Example 1:
 * Input: formula = "H2O"
 * Output: "H2O"
 * Example 1:
 * Input: formula = "Mg(OH)2"
 * Output: "H2MgO2"
 */
