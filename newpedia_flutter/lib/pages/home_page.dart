import 'package:flutter/material.dart';
import '../widgets/header.dart';
import '../widgets/article_card.dart';
import '../models/article.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  List<Article> get articles => [
        Article(
          title: 'Apa itu Flutter Web?',
          summary: 'Flutter Web memungkinkan pembuatan aplikasi web '
              'menggunakan bahasa Dart dengan satu basis kode.',
          date: '20 September 2025',
        ),
        Article(
          title: 'Kenapa Dart Cocok untuk Web?',
          summary: 'Dart cepat, aman, dan dapat dikompilasi ke JavaScript.',
          date: '18 September 2025',
        ),
        Article(
          title: 'Membangun Blog dengan Flutter',
          summary: 'Flutter bisa digunakan untuk blog, dashboard, '
              'hingga web app kompleks.',
          date: '15 September 2025',
        ),
      ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          const Header(),
          Expanded(
            child: Center(
              child: Container(
                width: 900,
                padding: const EdgeInsets.all(24),
                child: ListView(
                  children: articles
                      .map((article) =>
                          ArticleCard(article: article))
                      .toList(),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
