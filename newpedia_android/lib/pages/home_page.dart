import 'package:flutter/material.dart';
import '../ads/ad_banner.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  final List<Map<String, String>> articles = const [
    {
      "title": "Flutter untuk Android",
      "desc": "Membangun aplikasi Android modern dengan Flutter."
    },
    {
      "title": "AI dan Masa Depan",
      "desc": "Peran AI dalam teknologi masa depan."
    },
    {
      "title": "Dart untuk Developer",
      "desc": "Kenapa Dart cepat dan efisien."
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Newpedia'),
        centerTitle: true,
      ),
      body: Column(
        children: [
          Expanded(
            child: ListView.builder(
              padding: const EdgeInsets.all(16),
              itemCount: articles.length,
              itemBuilder: (context, index) {
                return Card(
                  margin: const EdgeInsets.only(bottom: 12),
                  child: ListTile(
                    title: Text(
                      articles[index]['title']!,
                      style: const TextStyle(fontWeight: FontWeight.bold),
                    ),
                    subtitle: Text(articles[index]['desc']!),
                  ),
                );
              },
            ),
          ),

          // 👇 IKLAN
          const AdBanner(),
        ],
      ),
    );
  }
}
