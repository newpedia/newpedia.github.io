import 'package:user_messaging_platform/user_messaging_platform.dart';

class ConsentManager {
  static Future<void> requestConsent() async {
    final params = ConsentRequestParameters(
      consentDebugSettings: null,
    );

    await UserMessagingPlatform.instance
        .requestConsentInfoUpdate(params);

    if (await UserMessagingPlatform.instance.isConsentFormAvailable()) {
      await UserMessagingPlatform.instance.loadAndShowConsentFormIfRequired();
    }
  }
}
