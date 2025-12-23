import 'package:flutter/material.dart';

void main() {
  runApp(const NewpediaApp());
}

class NewpediaApp extends StatelessWidget {
  const NewpediaApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Newpedia Flutter Web',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  final List<Map<String, String>> pages = const [
    {"title": "Beranda", "path": "/"},
    {"title": "AI & Teknologi", "path": "/us/ai/"},
    {"title": "IoT", "path": "/us/iot/"},
    {"title": "FinTech", "path": "/us/fintech/"},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Newpedia")),
      body: ListView.builder(
        itemCount: pages.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(pages[index]["title"]!),
            subtitle: Text(pages[index]["path"]!),
            onTap: () {
              // Lanjutkan nanti dengan routing
            },
          );
        },
      ),
    );
  }
}
