import 'package:flutter/material.dart';
import 'pages/home_page.dart';

void main() {
  runApp(const NewpediaApp());
}

class NewpediaApp extends StatelessWidget {
  const NewpediaApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Newpedia',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        colorSchemeSeed: Colors.blue,
      ),
      home: const HomePage(),
    );
  }
}
