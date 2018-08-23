---
title: "Write data into Excel file at runtime during test execution" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/write-data-into-excel-file-at-runtime-during-test-execution.html 
description: 
---
To write data into Excel file at runtime during test execution, you need to write your own script to handle this case. The current capabilities of Katalon Studio do provide you functions to handle it:

```
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Date;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import java.lang.String 
FileInputStream file = new FileInputStream (new File("E:\\Testdata.xlsx"))
XSSFWorkbook workbook = new XSSFWorkbook(file);
XSSFSheet sheet = workbook.getSheetAt(0);

'Read data from excel'
String Data_fromCell=sheet.getRow(1).getCell(1).getStringCellValue();
'Write data to excel'
sheet.getRow(1).createCell(1).setCellValue("Mahesh3");

file.close();
FileOutputStream outFile =new FileOutputStream(new File("E:\\Testdata.xlsx"));
workbook.write(outFile);
outFile.close();
```

_Credit to [tod2020@mail.ru](https://forum.katalon.com/discussion/4203/write-into-excel-at-runtime-during-test-execution#Comment_11768)_